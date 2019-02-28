class AddressBook {
  constructor() {
    this.contacts = [];
    }
    
    // addressBookInstance(name, addrss) {
    //   return 
    //   }

    add(info) {
      this.contacts.push(info);
      }

    deleteAt(index) {
      this.contacts.splice(index, 1)
      }



   //*************************************************************************
   // *********************** HOW TO CALL THIS METHOD  ***********************
   //*************************************************************************

    print() {
      console.log(addressbook);
      // alert('WORK');
    }   
 }
 
 
 // CONTACT CLASS
 class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.relation = relation;
    }  
 }
    
 
 
  let addressbook = new AddressBook();

 

   while(true) {
 
   let answer = prompt('would like to add, delete, print, or quit?');   

// instance of Address Book
   
 
   if(answer === 'quit') {
     console.log('You chose to *QUIT');
     break;
   }
   
   if(answer === 'add') {
     let name = prompt('What is the *NAME of the contact?');
     let phone = prompt('What is the *PHONE number of the contact?');
     let email = prompt('what is the *EMAIL address of the contact?');
     let relation = prompt('What is the *RELATION to the contact?');
     addressbook.add(new Contact(name, phone, email, relation));
   }
   
   if(answer === 'delete') {
     addressbook.deleteAt(addressbook);
     // continue;
     
   }
   //*************************************************************************
   // *********************** HOW TO CALL THIS METHOD  ***********************
   //************************************************************************* 
   if(answer === 'print') {
    addressbook.print();
 
   }
 


}
 
  
//  book.add() 

// Tech Wednesday:  use for Loop... to ADD to book