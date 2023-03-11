import React, { Component } from 'react';
import { build, environment } from '../appConfiguration';

const methodType = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

const responseCode = {
  success: 200,
  sessionExpire: 401,
  pageNotFound: 404,
  subscriptionExpire: 650
}

const domain = {
  dev: 'http://dev.certifiedinspect.com.au',
  qa: 'http://dev.certifiedinspect.com.au',
  production: "http://admin.hygeaapp.com"
}

const baseUrl = {
  dev: domain.dev + '/api/',
  production: domain.production + '/api/',
}

const apiVersion = {
  v1: 'v1',
  v2: 'v2'
}

const activeBaseURL = {
  base: (environment.build == 1) ? baseUrl.dev : baseUrl.production // change accourding to build
}

const url = {
  login: apiVersion.v1 + '/users/signin',
  logout: apiVersion.v1 + "/users/logout",
  signup: apiVersion.v1 + '/users/signup',
  inspection: apiVersion.v1 + '/users/inspection',
  updateInspection: apiVersion.v1 + '/users/updateInspection',
  uploadImages: apiVersion.v1 + '/users/inspectionImage',
  forgotpassword: apiVersion.v1 + '/users/forgotpassword',
  allInspection: apiVersion.v1 + '/users/inspections',
  adminSettings: apiVersion.v1 + '/admin-settings',
  getNofications: apiVersion.v1 + '/users/notification',
  addDamage: apiVersion.v1 + '/users/inspection/postDamage',
  updateDamage: apiVersion.v1 + '/users/inspection/updateDamage',
  deleteDamage: apiVersion.v1 + '/users/inspection/deleteDamage',
  getDamages: apiVersion.v1 + '/users/inspection/damage',
  addInspectionImage: apiVersion.v1 + '/users/inspection/postImage',
  updateInspectionImage: apiVersion.v1 + '/users/inspection/updateImage',
  deleteInspectionImage: apiVersion.v1 + '/users/inspection/deleteImage',//Post	"{""inspectionImageId"" : ""1""}"	
  getInspectionImage: apiVersion.v1 + '/users/inspection/image', //inspectionId type - GET
  versionCheck:  apiVersion.v1 + '/version-check'
}

const extraURL = {
  termsCondition: domain.production + "/user/termAndConditions",
  privacyPolicy: domain.production + '/user/privacyAndPolicy',
  faq: domain.production + '/user/faq',
  defaultProfile: domain.production + '/images/default-user.jpeg'
}

const googleApiKey = "AIzaSyBPAy9LB51jzBwiW0j3Rq1kC3kZBTsvFSk"

export {
  url, responseCode, methodType, extraURL, activeBaseURL, googleApiKey
}
