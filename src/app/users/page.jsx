import Link from "next/link";



const UsersData= async() => {
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await res.json();

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-4 container py-[40px]">
            {
                users.map(user => <div key={user.id} className="">
                    <div className="card bg-pink-300 max-w-[300px] ">
  <div className="card-body">
    <h2 className=" "> {user.name} </h2>
                      <p> {user.email} </p>
                      <p> {user.address.city} </p>
    <div className="card-actions justify-end">
      <Link href={`/users/${user.id}`} className="btn">See More</Link>
    </div>
  </div>
</div>
                </div> )
                }
                </div>
        </div>
    );
};

export default UsersData;