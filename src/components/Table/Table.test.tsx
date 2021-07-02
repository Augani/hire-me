import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders learn react link', () => {
//   render(<Table />);
 
});



const Children = [
    {
        "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
        "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
        "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
        "createdTime": "2018-01-16T12:30:09+00:00",
        "startstring":"",
        "name": {
          "fullName": "Aiden Jenkins",
          "firstName": "Aiden",
          "middleName": "",
          "lastName": "Jenkins"
        },
        "birthday": "2015-06-16T00:00:00+00:00",
        "homeAddress": null,
        "extraInfo": "",
        "language": "",
        "nationality": "",
        "birthplace": "",
        "gender": 1,
        "startDate": "2017-08-15T23:00:00+00:00",
        "endDate": null,
        "leavingReason": null,
        "email": null,
        "loginId": "",
        "relations": null,
        "image": {
          "small": "https://img.tryfamly.co/image/144a2c3466ac82ffa2aca814f8f36937475788dbe709cb3fd2e5174445e612e6/100x100/archive/2018/01/16/12/file/images/c9e56884-100c-4d88-b35c-86d7d541020c.jpg?expires=2021-07-09T00%3A00%3A00%2B00%3A00&crop=face",
          "large": "https://img.tryfamly.co/image/144a2c3466ac82ffa2aca814f8f36937475788dbe709cb3fd2e5174445e612e6/500x500/archive/2018/01/16/12/file/images/c9e56884-100c-4d88-b35c-86d7d541020c.jpg?expires=2021-07-09T00%3A00%3A00%2B00%3A00&crop=face",
          "empty": false
        },
        "isSleeping": false,
        "naps": [],
        "hasVacation": false,
        "isSick": false,
        "isAbsent": false,
        "leaves": [],
        "onBus": false,
        "onTrip": false,
        "statuses": [],
        "statusRegistrations": [],
        "checkins": [
          {
            "childCheckinId": "d91ec859-b5c3-4d8c-b4ae-3be166032ef1",
            "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:42:13+00:00",
            "pickupTime": "2021-07-02T16:00:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:45:02+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.05,
            "checkinStatements": null
          },
          {
            "childCheckinId": "6550e882-c034-444f-b08b-3e7c0cc22726",
            "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:35:41+00:00",
            "pickupTime": "2021-07-02T16:20:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:36:36+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.02,
            "checkinStatements": null
          },
          {
            "childCheckinId": "6830670d-fee4-47cc-8175-ab6040ba4cc7",
            "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:19:11+00:00",
            "pickupTime": "2021-07-02T13:10:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:26:35+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.12,
            "checkinStatements": null
          },
          {
            "childCheckinId": "dc59821b-9f77-4e8f-ae54-568255b42d58",
            "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T03:58:38+00:00",
            "pickupTime": "2021-07-02T14:40:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:04:49+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.1,
            "checkinStatements": null
          }
        ],
        "checkedIn": false,
        "checkinTime": "2021-07-02T04:42:13+00:00",
        "pickupTime": "2021-07-02T16:00:00+00:00",
        "pickupRelationId": "",
        "pickupName": ""
      },
      {
        "childId": "fc66aa2b-06bd-44a0-9fbe-2cf48a93dda5",
        "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
        "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
        "createdTime": "2018-01-16T12:30:05+00:00",
        "startstring":"",
        "name": {
          "fullName": "Alex Edwards",
          "firstName": "Alex",
          "middleName": "",
          "lastName": "Edwards"
        },
        "birthday": "2016-01-16T00:00:00+00:00",
        "homeAddress": null,
        "extraInfo": "",
        "language": "",
        "nationality": "",
        "birthplace": "",
        "gender": 1,
        "startDate": "2017-07-15T23:00:00+00:00",
        "endDate": null,
        "leavingReason": null,
        "email": null,
        "loginId": "",
        "relations": null,
        "image": {
          "small": "https://img.tryfamly.co/image/2b4cb7bf139ba0073b9deb43cf614a85cc2402d3dff4b06c7cb0ad09c5bcc3ce/100x100/archive/2018/01/16/12/file/images/1d051c61-2e72-4007-bee5-ed7647026d70.jpg?expires=2021-07-09T00%3A00%3A00%2B00%3A00&crop=face",
          "large": "https://img.tryfamly.co/image/2b4cb7bf139ba0073b9deb43cf614a85cc2402d3dff4b06c7cb0ad09c5bcc3ce/500x500/archive/2018/01/16/12/file/images/1d051c61-2e72-4007-bee5-ed7647026d70.jpg?expires=2021-07-09T00%3A00%3A00%2B00%3A00&crop=face",
          "empty": false
        },
        "isSleeping": false,
        "naps": [],
        "hasVacation": false,
        "isSick": false,
        "isAbsent": false,
        "leaves": [],
        "onBus": false,
        "onTrip": false,
        "statuses": [],
        "statusRegistrations": [],
        "checkins": [
          {
            "childCheckinId": "22b207dd-6d97-4b79-83eb-95b665f35823",
            "childId": "fc66aa2b-06bd-44a0-9fbe-2cf48a93dda5",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:43:32+00:00",
            "pickupTime": "2021-07-02T10:23:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:46:03+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.04,
            "checkinStatements": null
          },
          {
            "childCheckinId": "059f1dd3-949a-4bbd-92a3-5c7f1faa86b1",
            "childId": "fc66aa2b-06bd-44a0-9fbe-2cf48a93dda5",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:36:23+00:00",
            "pickupTime": "2021-07-02T17:00:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:38:01+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.03,
            "checkinStatements": null
          },
          {
            "childCheckinId": "32f5eed9-c5a9-45ba-aef2-6dc2a03a235b",
            "childId": "fc66aa2b-06bd-44a0-9fbe-2cf48a93dda5",
            "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
            "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
            "checkinTime": "2021-07-02T04:07:52+00:00",
            "pickupTime": "2021-07-02T13:00:00+00:00",
            "pickupRelationId": "",
            "goHomeWithChildId": "",
            "checkoutTime": "2021-07-02T04:21:48+00:00",
            "checkinLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "checkoutLoginId": "1b00c537-7e86-4e0a-91e7-6fc49d4e04aa",
            "autoCheckedOut": false,
            "deletedAt": null,
            "hours": 0.23,
            "checkinStatements": null
          }
        ],
        "checkedIn": false,
        "checkinTime": "2021-07-02T04:43:32+00:00",
        "pickupTime": "2021-07-02T10:23:00+00:00",
        "pickupRelationId": "",
        "pickupName": ""
      }
]

describe('Testing Table component', () => {

    test('renders children correctly', () => {
        const checkIn = jest.fn()
        const checkOut = jest.fn();
        const dispatch = jest.fn();
        render(<Table tableActions={{checkIn, checkOut,dispatch }} pages={[1]} currentPage={1}  data={Children} />);
        const childId1 = screen.getByText(/a62035c2-387e-4e2d-8fa8-727597639a77/i);
        const childId2 = screen.getByText(/fc66aa2b-06bd-44a0-9fbe-2cf48a93dda5/i);
        const name = screen.getByText(/Aiden Jenkins/i);
        const name2 = screen.getByText(/Alex Edwards/i);
        expect(childId1).toBeInTheDocument();
        expect(childId2).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(name2).toBeInTheDocument();
    });
   
})
