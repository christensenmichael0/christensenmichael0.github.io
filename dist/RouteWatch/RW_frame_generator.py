# -*- coding: utf-8 -*-
"""
This script creates the frames necessary for a global animation of all RW jobs. 
The data is created by running RW_animation_data_builder. This generates a file 
called full_data.pkl (that file is read and used in here.)

Created on Tue Nov 15 13:21:29 2016

@author: Mike
"""

#import RW_animation_data_builder #this runs the data builder script
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import numpy as np
import datetime
import pickle
import os

#get to the correct directory
os.chdir(r'C:\Users\Mike\Documents\Python Scripts\RW')

#set the frame directory
frame_dir=os.path.join('C:\Users\Mike\Documents\Python Scripts\RW','animation_frames_numbered')

#small_data=individual_ship.transpose()
pkl_file = open('full_data.pkl', 'rb')
big_data = pickle.load(pkl_file).transpose()
pkl_file.close()

#break the data into coordinate array and time array 
lon_lat_data = np.array([big_data[1,:].astype(float),big_data[0,:].astype(float)])
time_data = np.array(big_data[2,:])
unique_id_data = big_data[3,:].astype('int16')

#need to sort the full arrays by increasing time
full_time_sort_indx=time_data.argsort()
time_data.sort()            
lon_lat_data=lon_lat_data[:,full_time_sort_indx]
unique_id_data=unique_id_data[full_time_sort_indx]

#determine the total time span of the data
min_time=min(time_data)
min_time_floor=datetime.datetime(min_time.year,min_time.month,min_time.day)
max_time=max(time_data)+datetime.timedelta(days=1) #add a day to make sure we do ceiling correctly
max_time_floor=datetime.datetime(max_time.year,max_time.month,max_time.day)

hour_span=((max_time_floor-min_time_floor).total_seconds())/3600 # time difference in hrs
#create time array at some defined interval
time_step=12
time_arr = np.array([min_time_floor + datetime.timedelta(hours=i) for i in 
xrange(0,int(np.ceil(hour_span)),time_step)])

#draw the map
fig = plt.figure()
#maximize the figure
figManager = plt.get_current_fig_manager()
figManager.window.showMaximized()

ax = plt.axes()
#ax = fig.add_axes([0.05,0.05,0.9,0.9])
map=Basemap(llcrnrlon=-179,llcrnrlat=-60,urcrnrlon=179,urcrnrlat=75,
            projection='mill', resolution='l')
map.drawcoastlines()
map.drawcountries()
map.drawmapboundary(fill_color=(221./256,221./256,221./256)) #'#99ffff', '#cc9966'
map.fillcontinents(color=(255./256,226./256,167./256),lake_color=(221./256,221./256,221./256))
map.drawparallels(np.arange(-80,81,20),labels=[1,1,0,0])
map.drawmeridians(np.arange(0,360,60),labels=[0,0,0,1])

map.drawmapscale(150, -54, -20, 0, 1000, barstyle='fancy', units='nmi',
fontsize=9, yoffset=None, labelstyle='fancy', fontcolor='k',
fillcolor1='w', fillcolor2='k', ax=None, format='%d', zorder=None)

ttl = ax.text(.6, 1.03, '', transform = ax.transAxes, va='center',ha='right')
l_old= ax.scatter([], [])
l_new = ax.scatter([], [])
p = ax.scatter([], [])

#convert the coordinates into a form readable by the map
lon_data, lat_data = map(lon_lat_data[0,:], lon_lat_data[1,:])
lon_data=lon_data[np.newaxis,:]
lat_data=lat_data[np.newaxis,:]
lon_lata_data_transformed=np.concatenate((lon_data,lat_data),axis=0)

#do the simultaneous plotting
#use various shades and transparencies to depict age of positions 
frames=len(time_arr)-1

for num in xrange(frames):

    good_indexes=time_data<time_arr[num+1] #find all data less than a given time

    if any(good_indexes):
        
        #data older than than 1 week
        old_indexes=time_data<(time_arr[num]-datetime.timedelta(days=3))
        l_old.set_offsets(lon_lata_data_transformed[:,old_indexes].transpose()) 
        l_old.set_color((179./256, 255./256, 240./256))
        l_old.set_sizes(np.array([8]))
#        l_old.set_visible(True)       
        
        #data in the last week
        last_week_indexes=np.logical_and(time_data>=(time_arr[num]-datetime.timedelta(days=3)),
                                      time_data<time_arr[num+1])
        l_new.set_offsets(lon_lata_data_transformed[:,last_week_indexes].transpose()) 
        l_new.set_color((0,0,0))
        l_new.set_sizes(np.array([8]))
#        l_new.set_visible(True) 
        

        recent_head_indexes=np.logical_and(time_data>=(time_arr[num]-datetime.timedelta(days=3)),
                                      time_data<time_arr[num+1])

        #Look for unique vessels in the past 3 days and plot most recent position
        if any(recent_head_indexes):
            in_time_frame=unique_id_data[recent_head_indexes]
            unique_vessels=np.unique(in_time_frame)

            trimmed_ids=unique_id_data[recent_head_indexes]                       
            trimmed_positions=lon_lata_data_transformed[:,recent_head_indexes]
            
            head_point_array=np.zeros((2,len(unique_vessels)),dtype=float)
            for idx,vessel in enumerate(unique_vessels):
                good_coordinates=trimmed_positions[:,trimmed_ids==vessel]
                final_point=good_coordinates[:,-1]
                head_point_array[:,idx]=final_point
                p.set_offsets(head_point_array.transpose())
                p.set_sizes(np.array([20]))
                p.set_color('red')
                p.set_edgecolor('black')
        
        fname_text=time_arr[num].strftime("%Y-%m-%d_%H")
        ttl_text="{:%B %d, %Y, %H:00 UTC}".format(time_arr[num])
        ttl_text='{:>30}'.format(ttl_text) #right align to keep title from shifting
        ttl.set_text(ttl_text)
        ttl.set_fontsize(14)        
        ttl.set_fontweight('bold')
        ttl.set_backgroundcolor('white')
    else:
        fname_text=time_arr[num].strftime("%Y-%m-%d_%H")        
        ttl_text="{:%B %d, %Y, %H:00 UTC}".format(time_arr[num])
        ttl_text='{:>30}'.format(ttl_text) #right align to keep title from shifting
        ttl.set_text(ttl_text)
        ttl.set_fontsize(14)        
        ttl.set_fontweight('bold')
        #ttl.set_backgroundcolor('white')
        
    #plt.savefig(os.path.join(frame_dir,fname_text+'.png'), bbox_inches='tight',dpi=150)
    plt.savefig(os.path.join(frame_dir,'{:04d}'.format(num))+'.png', bbox_inches='tight',dpi=150)
    
    #use ffmpeg program from the command line to make animation
    # ffmpeg -framerate 22 -i %04d.png -vf scale=2000:934 -crf 1 -c:v libx264 -pix_fmt yuv420p out.mp4
    

        

                                   
