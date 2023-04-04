import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFirebase } from 'react-redux-firebase'

const UserProfilePage = ( userData) => {
  const router = useRouter()
  const firebase = useFirebase()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      const userId = router.query.userId
      const userRef = firebase.firestore().collection('users').doc(userId)
      const userSnapshot = await userRef.get()
      setUserData(userSnapshot.data())
    }
    getUserData()
  }, [])

  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.image} alt="User profile" />
          <h1>{userData.name}</h1>
          <h2>{userData.email}</h2>
          <h3>Followers: {userData.followerCount}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UserProfilePage

