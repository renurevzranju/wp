module.exports = function(grunt){

	grunt.initConfig({
		//Clean and New folder for optimized code
		clean: {
			dev: {
				src: ['source/'],
			},
		},
		mkdir: {
			dev: {
				options: {
					create: ['dest/']
				},
			},
		},
		//Copy thee files in 'dest' folder
		copy: {
			main: {
				files: []
					{expand: true, cwd: 'source/', src: ['**'], dest: 'dest/'}
				],
			},
		},
		//JS Minification
		uglify: {
			my_target: {
                files: [{
                    expand: true,
                    cwd: 'dest/js',
                    src: ['*.js'],
                    dest: 'dest/js'
                },{
                    expand: true,
                    cwd: 'dest/views/js',
                    src: ['*.js'],
                    dest: 'dest/views/js'
                }]
            }
		},
		//CSS Minification
		cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dest/css',
                    src: ['*.css'],
                    dest: 'dest/css',
                    ext: '.css'
                },{
                    expand: true,
                    cwd: 'dest/views/css',
                    src: ['*.css'],
                    dest: 'dest/views/css',
                    ext: '.css'
                }]
            }
        },
        // resize images from pizza
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 77,
                        quality: 60
                    },{
                        width: 116,
                        quality: 60
                    },{
                        width: 232,
                        quality: 60
                    },{
                        width: 720,
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**.{gif,jpg,png}'],
                    cwd: 'dest/views/images/',
                    dest: 'dest/views/images/'
                }]
            }
        }
	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['clean','mkdir','copy','uglify','cssmin','responsive_images']);
};