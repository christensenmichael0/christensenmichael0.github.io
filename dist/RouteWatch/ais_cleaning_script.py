# -*- coding: utf-8 -*-
"""
Created on Wed Sep 28 10:32:29 2016

@author: Mike
"""

import os
import datetime

#Load the data
parent_dir='C:\Users\Mike\Documents\Python Scripts\AIS\HMI_AIS\Single_Day_Gulf'
in_file_name='AIS_data.csv'
full_file_path_in=os.path.join(parent_dir,in_file_name)

out_file_name='AIS_data_cleaned.csv'
full_file_path_out=os.path.join(parent_dir,out_file_name)

f_in=file(full_file_path_in,'r')
f_out=file(full_file_path_out,'w')

counter=0
output_line='dummy'
aggregate_data=[]

while len(output_line):
       
    output_line=f_in.readline().strip()
    
    if output_line!='':      
        split_output=output_line.split(';')
        retrieved_cols=[split_output[0].replace('\"',''),split_output[3],
                    split_output[4], split_output[6],split_output[7],
                    split_output[8], split_output[9],split_output[10],
                    split_output[11], split_output[14],split_output[19]+'\n']
    
        #[mmsi,date,time,lat,lon,sog,cog,heading,underway_status,ship_type]
        if (not ''  in retrieved_cols) and (split_output[14].isdigit()) \
        and ('under_way' in split_output[11].lower()) and \
        (('6' == split_output[14][0]) or ('7' == split_output[14][0]) or 
        ('8' == split_output[14][0])) and float(split_output[8])>5.0 and \
        split_output[19]=='V':
            counter+=1             
            write_string=', '.join(retrieved_cols)
            f_out.write(write_string)
            
            aggregate_data.append(retrieved_cols)

f_in.close()
f_out.close()

#Create the basemap for plotting data

from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.lines as mlines
from collections import defaultdict

plt.close('all')
# create figure and axes instances
fig = plt.figure(figsize=(12,12))
ax = fig.add_axes([0.1,0.1,0.8,0.8])
# create polar stereographic Basemap instance.
m = Basemap(projection='merc',llcrnrlat=18.,urcrnrlat=31,llcrnrlon=-100., \
            urcrnrlon=-78.,lat_ts=25,resolution='f')
# draw coastlines, state and country boundaries, edge of map.
m.drawcoastlines()
m.drawstates()
m.drawcountries()
m.fillcontinents(color='coral',lake_color='aqua')
# draw parallels.
parallels = np.arange(18.,31.,3.)
m.drawparallels(parallels,labels=[1,0,0,0],fontsize=10)
# draw meridians
meridians = np.arange(-100.,-78.,5.)
m.drawmeridians(meridians,labels=[0,0,0,1],fontsize=10)

#find unique vessels... maybe then plot their tracks 
time_max=datetime.datetime.min
time_min=datetime.datetime.max
unique_mmsi=set([x[0] for x in aggregate_data]) #371 unique vessels
ship_grouper=defaultdict(set)

for ship in list(unique_mmsi):
    
    ship_type=[x[9].strip() for x in aggregate_data if x[0]==ship][0]
    
    
    ship_lats=[float(x[3]) for x in aggregate_data if x[0]==ship]
    ship_lons=[float(x[4]) for x in aggregate_data if x[0]==ship]
    ship_datetime_str=[x[1]+' '+x[2] for x in aggregate_data if x[0]==ship]  
    
    ship_datetime_list=[datetime.datetime.strptime(dt,'%d/%m/%Y %H:%M:%S') for dt in ship_datetime_str]
    time_sort_index=sorted(range(len(ship_datetime_list)), key=lambda k: ship_datetime_list[k])
    
    #keep track of the running min and max time for the figure title
    time_min=min(min(ship_datetime_list),time_min)
    time_max=max(max(ship_datetime_list),time_max) 
    
    ship_lats_sort=[ship_lats[index] for index in time_sort_index]
    ship_lons_sort=[ship_lons[index] for index in time_sort_index]
    convert_x, convert_y = m(ship_lons_sort, ship_lats_sort)
    
    
    if '6' in ship_type:
        use_color='r' 
        vname='passenger'
    elif '7' in ship_type:
        use_color='g' 
        vname='cargo'
    else:
        use_color='b' #tankers
        vname='tanker'
    
    ship_grouper[vname].add(ship)
    
    #plot the different class vessels with their own separate colors     
    plt.plot(convert_x,convert_y,'k.-',markersize=10,color=use_color,label=vname)
   # plt.text(convert_x[-1],convert_y[-1],ship,fontsize=8)
    
   
#Add the Legend
red_line = mlines.Line2D([], [], color='red', marker='.',
                          markersize=10, label='Passenger Vessels')
                          
green_line = mlines.Line2D([], [], color='green', marker='.',
markersize=10, label='Cargo Vessels')

blue_line = mlines.Line2D([], [], color='blue', marker='.',
markersize=10, label='Tanker Vessels')

plt.legend(handles=[red_line,green_line,blue_line],loc=2)

time_min_str=datetime.datetime.strftime(time_min,'%Y-%m-%d %H:%M:%S')
time_max_str=datetime.datetime.strftime(time_max,'%Y-%m-%d %H:%M:%S')

plt.title('T-AIS and S-AIS for Specific Vessel Classes: '+time_min_str + \
' -- ' + time_max_str + ' UTC',fontsize=16,fontweight='bold')

#maximize the figure
figManager = plt.get_current_fig_manager()
figManager.window.showMaximized()

plt.savefig('Single_day_AIS.png', bbox_inches='tight',dpi=150)


#30 passenger vessels
#189 cargo vessels
#151 tanker vessels
    
    
    
    
    
    
    