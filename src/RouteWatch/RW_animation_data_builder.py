# -*- coding: utf-8 -*-
"""
This script builds the full_data.pkl file that is used by RW_frame_generator. 
The user should pay attention to "the_paths" variable in the code below and 
adjust as necessary to make sure data is being collected from the appropriate
directories.

Created on Tue Nov 15 12:36:33 2016

@author: Mike
"""

import os
import glob
import csv

import datetime
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from matplotlib.path import Path
import numpy as np
import random
from collections import defaultdict
import pickle

#define a random color generator for plotting tracks later on
def random_color():
    levels = range(32,256,16)
    return tuple(random.choice(levels)/256. for _ in range(3))

#dictionary to convert NSEW to +/-        
lat_lon_map={'N':1,'S':-1,'E':1,'W':-1}

map=Basemap(llcrnrlon=-179,llcrnrlat=-60,urcrnrlon=179,urcrnrlat=75,
            projection='mill', resolution='l')
            

#list of archive folders and present year folder
the_paths=[r'P:\RouteWatch\Yearly_Archive\2008 and prior\2012',r'P:\RouteWatch\Yearly_Archive\2013',
           r'P:\RouteWatch\Yearly_Archive\2014', r'P:\RouteWatch\Yearly_Archive\2015',
           r'P:\RouteWatch\2016']
          
#vessel_struct=defaultdict(list)
full_ct_struct=np.empty((0,4))
counter=0

#loop through archive years and present year
for dir_ind_big in the_paths:

    dir_list=os.listdir(dir_ind_big)

    #loop through all folders in each year
    for dir_ind in dir_list:
        ship_folder=os.path.join(dir_ind_big,dir_ind,'Post Voyage Stats')
        csv_file=glob.glob(ship_folder+'\\*.csv')

        #does the csv file exist.. else continue
        if not csv_file:
            continue
    
        csv_file=csv_file[0]
        #read the csv file
        with open(csv_file,'rb') as f:
            reader=csv.reader(f)
            first_line=reader.next()
        
            #does the csv contain the right info... else continue
            if not 'vessel_id' in first_line:
                continue
        
            #assign each vessel a unique identifier
            counter+=1 
            
            #initialize some empty arrays for each vessel
            lat_vec=np.array([],dtype=float)
            lon_vec=np.array([],dtype=float)
            date_vec=np.array([],dtype='datetime64')
            
            for row in reader:
                dt_utc=datetime.datetime.strptime(row[1],'%Y-%m-%d %H:%M:%S %Z')
                date_vec=np.concatenate((date_vec,[dt_utc]))          
            
                lon_str=row[2].split()
                lon_numeric=float(lon_str[0])*lat_lon_map[lon_str[1]]
                lon_vec=np.concatenate((lon_vec,[lon_numeric]))            
                
                lat_str=row[3].split()
                lat_numeric=float(lat_str[0])*lat_lon_map[lat_str[1]]
                lat_vec=np.concatenate((lat_vec,[lat_numeric]))            
                
                x, y = map(lon_vec, lat_vec)
                locations = np.c_[x, y]
            
            #create land polygons
            polygons = [Path(p.boundary) for p in map.landpolygons]
            
            result = np.zeros(len(locations), dtype=bool) 
            #finds the positions on land for each ship
            for polygon in polygons:
                result += np.array(polygon.contains_points(locations))
        
            #find the positions in the water
            in_water_indx=[result!=True]
        
            lat_vec=lat_vec[in_water_indx]
            lon_vec=lon_vec[in_water_indx]
            date_vec=date_vec[in_water_indx]
            
            #sort the arrays by time (min to max datetime)
            time_sort_indx=date_vec.argsort()
            date_vec.sort()            
            lat_vec=lat_vec[time_sort_indx]
            lon_vec=lon_vec[time_sort_indx]
            
            #organize lat, lon, time into columns for each ship and concatenate
            lat_vec=lat_vec[:,np.newaxis]
            lon_vec=lon_vec[:,np.newaxis]            
            date_vec=date_vec[:,np.newaxis]
            id_vec=np.ones_like(lat_vec)*counter
            
            individual_ship=np.concatenate((lat_vec,lon_vec,date_vec,id_vec),axis=1)
            
            #concentate the individual and main structure
            full_ct_struct=np.concatenate((full_ct_struct,individual_ship),axis=0)


#save the data to disk
file_path="C:\Users\Mike\Documents\Python Scripts\RW"          
with open(os.path.join(file_path,"full_data.pkl"),'wb') as f:
    pickle.dump(full_ct_struct,f) 

            
            



        
        
        
    
    

