module.exports = function(grunt) {
    grunt.initConfig({

        // clean folders and files
        clean: [
			'dist/',
			'src/img/initial_staging/',
            'src/surf/img/initial_staging/',
        ],

        // copy some files
        copy: {
            main: {
                files: [

                    // makes all src relative to cwd
                    {
                        expand: true,
                        cwd: 'src/certifications',
                        src: ['**'],
                        dest: 'dist/certifications'
                    },
                    {
                        expand: true,
                        cwd: 'src/project-pdf',
                        src: ['**'],
                        dest: 'dist/project-pdf'
                    },
                    {
                        expand: true,
                        cwd: 'src/RouteWatch',
                        src: ['**'],
                        dest: 'dist/RouteWatch'
                    },
					{
                        expand: true,
                        cwd: 'src/surf/maps',
                        src: ['**'],
                        dest: 'dist/surf/maps'
                    },
                    {
                        expand: true,
                        cwd: 'src/animation',
                        src: ['**'],
                        dest: 'dist/animation'
                    }


                ]
            }
        },

        // Minify html files
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'dist/',
                }]
            }
        },
        // Uglify JS
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/'
                }]
            }
        },
        // Minify CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'dist/'
                }]
            }
        },

        // responsive-images
        responsive_images: {
            homePageImages: {
                options: {
                    sizes: [{
                            width: 400,
                            suffix: 'small'
                        }, {
                            width: 800,
                            suffix: 'medium'
                        }, {
                            width: 1200,
                            suffix: 'large'
                        },
                        {
                            width: 2000,
                            suffix: 'superlarge'
                        }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{png,PNG,jpg,jpeg,JPG,gif,GIF}'],
                    cwd: 'src/img',
                    dest: 'src/img/initial_staging'
                }]
            },
            surfImages: {
                options: {
                    sizes: [{
                            width: 400,
                            suffix: 'small'
                        }, {
                            width: 800,
                            suffix: 'medium'
                        }, {
                            width: 1200,
                            suffix: 'large'
                        },
                        {
                            width: 2000,
                            suffix: 'superlarge'
                        }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpg,jpeg,JPG,gif,GIF,png,PNG}'],
                    cwd: 'src/surf/img',
                    dest: 'src/surf/img/initial_staging'
                }]
            },
            buoyMarker: {
                options: {
                    sizes: [{
                        width: 42,
                        suffix: 'small'
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpg,jpeg,JPG,gif,GIF,png,PNG}'],
                    cwd: 'src/surf/img/buoy_marker',
                    dest: 'src/surf/img/initial_staging'
                }]
            }
        },
        // Minify images
        tinyimg: {
            dynamicHome: { 
                files: [{
                    expand: true,
                    src: ['**.{png,PNG,jpg,jpeg,JPG,gif,GIF}'], 
                    cwd: 'src/img/initial_staging', 
                    dest: 'dist/img' 
                }]
            },
            dynamicSurf: { 
                files: [{
                    expand: true,
                    src: ['**.{png,PNG,jpg,jpeg,JPG,gif,GIF}'], 
                    cwd: 'src/surf/img/initial_staging', 
                    dest: 'dist/surf/img' 
                }]
            }
        }
    });
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-tinyimg');

    // Default tasks.
    grunt.registerTask('default', ["clean","copy", "htmlmin", "cssmin", "uglify", "responsive_images", "tinyimg"]);
}