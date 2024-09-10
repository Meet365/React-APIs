import CustomerCard from "../components/CustomerCard";
import AboutServices from "../components/AboutServices";
export default function Customers() {
  const Customer = [
    {
      id: 1,
      head: "ram manthan",
      title: "Review-1",
      comment:
        "the website is itself appealing whihc is why it looks cool and stupif as well ",
    },
    {
      id: 2,
      head: "rame manthan",
      title: "Review-2",
      comment:
        "the website is itself appealing whihc is why it looks cool and stupif as well ",
    },
    {
      id: 3,
      head: "ram manthane",
      title: "Review-3",
      comment:
        "the website is itself appealing whihc is why it looks cool and stupif as well ",
    },
    {
      id: 4,
      head: "ram manthan",
      title: "Review-1",
      comment:
        "the website is itself appealing whihc is why it looks cool and stupif as well ",
    },
    {
      id: 5,
      head: "ram manthan",
      title: "Review-1",
      comment:
        "the website is itself appealing whihc is why it looks cool and stupif as well ",
    },
  ];
  let showCustomer = true;
   
  function showDetails(Customer, img, ){

  }

  function clickshowtext(){
    
  }
    

  return (
    <>
      {showCustomer ? (
        <div className="flex">
          <div className="bg-teal-50">
            {Customer.map((customer) =>{
                return (

                    <CustomerCard /*onClick={}*/ head={customer.head} title={customer.title} comment={ customer.comment} />
                )
            }) }
           
          </div>
          <div className="flex-1">
                <AboutServices />
          </div>
        </div>
      ) : null}
    </>
  );
}
