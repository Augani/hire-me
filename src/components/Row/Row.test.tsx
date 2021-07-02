import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Row from './Row';


const Child = {
    "childId": "a62035c2-387e-4e2d-8fa8-727597639a77",
    "institutionId": "fb6c8114-387e-4051-8cf7-4e388a77b673",
    "groupId": "11fc220c-ebba-4e55-9346-cd1eed714620",
    "createdTime": "2018-01-16T12:30:09+00:00",
    "startstring": "",
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
}

describe('Testing Row component', () => {

    test('renders details correctly', () => {
        const checkIn = jest.fn()
        const checkOut = jest.fn();
        render(<table>
            <tbody>
                <Row checkIn={checkIn} checkOut={checkOut} data={Child} />
            </tbody>
        </table>);
        const childId = screen.getByText(/a62035c2-387e-4e2d-8fa8-727597639a77/i);
        const groupId = screen.getByText(/11fc220c-ebba-4e55-9346-cd1eed714620/i);
        const name = screen.getByText(/Aiden Jenkins/i);
        expect(childId).toBeInTheDocument();
        expect(groupId).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });
    test('renders checkIn click correctly', () => {
        const checkIn = jest.fn()
        const checkOut = jest.fn()
        render(<table>
            <tbody>
                <Row checkIn={checkIn} checkOut={checkOut} data={Child} />
            </tbody>
        </table>);
        fireEvent.click(screen.getByText(/Check In/i))
        expect(checkIn).toHaveBeenCalledTimes(1);
        expect(checkIn).toHaveBeenCalledWith(Child.childId)

    })
    test('renders checkOut click correctly', () => {
        const checkIn = jest.fn()
        const checkOut = jest.fn()
        Child.checkedIn = true;
        render(<table>
            <tbody>
                <Row checkIn={checkIn} checkOut={checkOut} data={Child} />
            </tbody>
        </table>);
        fireEvent.click(screen.getByText(/Check Out/i))
        expect(checkOut).toHaveBeenCalledTimes(1);
        expect(checkOut).toHaveBeenCalledWith(Child.childId)

    })
})
