export interface ICampaign {
   
   id: string;
   heading: string;
   description: string;
   buttonLabel: string;
   imageUrl: string;
   startDate:string;
   endDate:string;
   editing:boolean;
   
   status: 'ACTIVE' | 'INACTIVE';
}