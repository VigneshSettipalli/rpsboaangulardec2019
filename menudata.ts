import {Item, Menu} from "./menu";


export  let menuData:Menu[]=[
  new Menu('Home', 'pi pi-fw pi-home','Home',[new Item('About Loan',

    'pi pi-fw pi-share-alt','Home/About-Loan'),
    new Item('About Offer','pi pi-fw pi-pencil','Home/About-Offer')

  ]),

  new Menu('Loan', 'pi pi-fw pi-plus','Loan',[new Item('Apply',

    'pi pi-fw pi-share-alt','Loan/Apply'),
    new Item('Eligibility Check','pi pi-fw pi-pencil','Loan/Eligibility-Check'),
    new Item('Loan Status','pi pi-fw pi-cog','Loan/Loan-Status'),
    new Item('Pay EMI','pi pi-fw pi-key','Loan/Pay-EMI')
  ]),

 /* new Menu('Login', 'pi pi-fw pi-sign-in','Login',[ ] ),*/

  new Menu('Notification', 'pi pi-fw pi-bell','Notification',[ ]),
  new Menu('Admin', 'pi pi-fw pi-sign-out','Admin',[
    new Item('Inbox','pi pi-fw pi-share-alt','Admin/Inbox'),
    new Item('Alert','pi pi-fw pi-pencil','Admin/Alert'),
    new Item('Report','pi pi-fw pi-cog','Admin/Report')
  ]),


]
