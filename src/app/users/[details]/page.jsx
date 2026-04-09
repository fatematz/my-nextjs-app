import Link from "next/link"

const UsersDetails = async ({ params }) => {
    const { details } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${details}`)
    const user = await res.json()

    // const data = user.find((u) => u.id === parseInt(details))

    return (
        <div className="container flex justify-center py-[200px]">
            {
                <div className='card bg-neutral text-neutral-content w-96'>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'> {user.name} </h2>
                        <p> Name:  {user.username} </p>
                        <p> Email: {user.email} </p>
                        <p> City: {user.address.city} </p>
                        <div className='card-actions justify-end'>
                            <Link href="/" className='btn btn-primary'>Home</Link>
                            <Link href="/users" className='btn btn-ghost'>Users</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UsersDetails
