
export async function Http(
    request: RequestInfo,
    options?: any
  ): Promise<any> {
    const response = await fetch(request, options);
    const body = await response.json();
    return body;
  }

interface ITokens {
    accessToken: string;
    groupId: string;
    institutionId: string;
}

const Tokens: ITokens = {
    accessToken: "234ffdb8-0889-4be3-b096-97ab1679752c",
    groupId: '11fc220c-ebba-4e55-9346-cd1eed714620',
    institutionId: 'fb6c8114-387e-4051-8cf7-4e388a77b673'
}
const MainUrl:string = "https://tryfamly.co/api/daycare/tablet/group"
const CheckInUrl:string = "https://tryfamly.co/api/v2/children/"



export const Fetch = (type: 'getChildren' | 'checkInChild' | 'checkOutChild', id?:string, time?:string)=>{
    switch(type){
        case 'getChildren':
           return Http(MainUrl + `?accessToken=${Tokens.accessToken}&groupId=${Tokens.groupId}&institutionId=${Tokens.institutionId}`);
        case 'checkInChild':
            let formData = new FormData();
            if(!time)return null;
            formData.append('pickupTime', time);
            formData.append('accessToken', Tokens.accessToken);
            const paramsIn = {
                    method: "post",
                    body: formData
            }
            return Http(CheckInUrl+`${id}/checkins`, paramsIn)
        case "checkOutChild":
            let formDataOut = new FormData();
            formDataOut.append('accessToken', Tokens.accessToken);
            const paramsOut = {
                method: "post",
                body: formDataOut
        }
        return Http(CheckInUrl+`${id}/checkout`, paramsOut)
        default:
            return null;
    }   
}