all:

include Makefunc.mk

TOP := $(dir $(lastword $(MAKEFILE_LIST)))

##################################################

.PHONY: all test clean

all: git-hook build

##############################

test:

##############################

clean:
	rm -rf .make
