import './AdminHome.css'

// have components for reminders
// notifications




function AdminHome(){
    return(
       <div className="main-dash">
            <span className='primaryText'><h2>Welcome to your dashboard</h2></span>
            <div className="home-image">
                <img src="https://i.pinimg.com/originals/04/62/d7/0462d7bd79df986e5be42ebf6c7a8476.gif" alt='dog running'/>
            </div>
       </div>
    )
}

export default AdminHome;