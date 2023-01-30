export interface ICampaign {
   id: string;
   heading: string;
   description: string;
   buttonLabel: string;
   imageUrl: string;
   startDate:string;
   endDate:string;
   status: 'ACTIVE' | 'INACTIVE';
}


export interface ParsedCampaign {
   id:string;
      heading:string;
      selected: boolean;
      dataToDisplay:{
         
          title:string;
          value: string;
      
      }[];
}
export interface Idata{
   heading: string;
   description: string;
   buttonLabel: string;
   imageUrl: string;
   startDate:string;
   endDate:string;
   status: 'ACTIVE' | 'INACTIVE';
}