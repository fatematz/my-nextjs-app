


const UsersData= async() => {
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await res.json();

    return (
        <div>
            <h1>Users Details</h1>
            <div className="grid grid-cols-4 gap-4 container">
            {
                users.map(user => <div key={user.id} className="">
                    <div className="card bg-pink-300 max-w-[300px] ">
  <div className="card-body">
    <h2 className=" "> {user.name} </h2>
                      <p> {user.email} </p>
                      <p> {user.address.city} </p>
    <div className="card-actions justify-end">
      <button className="btn">See More</button>
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