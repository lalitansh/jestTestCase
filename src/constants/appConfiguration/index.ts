import React, { Component } from 'react';

const build = {
  dubug: 1,
  production: 2
}

const environment = {
  build: build.dubug //change build environment here
}

export { build, environment }
