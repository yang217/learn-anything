#!/bin/bash

if [ "$NODE_ENV" == "production" ]; then
	npm run start:prod
else
	npm run	start:memc
fi	
