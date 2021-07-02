
export interface IState {
    data: IChild[];
    currentPage: number;
}

export interface IAction {
    type: string;
    payload: any;
}

export interface ITableActions{
    dispatch: (action: IAction)=>void;
    checkIn: (id: string)=>void;
    checkOut: (id:string)=>void;
}


export interface IName {
    fullName: string;
    firstName: string;
    middleName: string;
    lastName: string;
}

export interface IImage {
    small: string;
    large: string;
    empty: boolean;
}

export interface IChild {
    childId: string;
    institutionId: string;
    groupId: string;
    createdTime: string;
    name: IName;
    birthday: string;
    homeAddress?: any;
    extraInfo: string;
    language: string;
    nationality: string;
    birthplace: string;
    gender: number;
    startstring: string;
    endstring?: any;
    leavingReason?: any;
    email?: any;
    loginId: string;
    relations?: any;
    image: IImage;
    isSleeping: boolean;
    naps: any[];
    hasVacation: boolean;
    isSick: boolean;
    isAbsent: boolean;
    leaves: any[];
    onBus: boolean;
    onTrip: boolean;
    statuses: any[];
    statusRegistrations: any[];
    checkins: any[];
    checkedIn: boolean;
    checkinTime?: any;
    pickupTime?: any;
    pickupRelationId?: any;
    pickupName: string;
}



