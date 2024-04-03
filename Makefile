# Define the default target
all: build

# Define the build target
build:
	node deploy/generateProjectList.js

# Define a clean target as an example, if you need to clean up generated files
clean:
	rm -f deploy/projectList.json

.PHONY: all build clean
