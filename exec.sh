#!/bin/bash
sudo docker build -t nrgytransact:v1 .
sudo docker run -p 5173:5173 nrgytransact:v1