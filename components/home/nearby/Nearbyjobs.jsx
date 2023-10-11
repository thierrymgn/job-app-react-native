import { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyjobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch  from '../../../hook/useFetch'
import reactDevelopper from '../../../data/reactDevelopper.json'

const Nearbyjobs = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  // const { data, isLoading, error } = useFetch(
  //   'search',
  //   {
  //     query: 'React developer',
  //     num_pages: 1,
  //   }
  // )

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
        { isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text> Something went wrong </Text>
        ) : (
          reactDevelopper.data.map((job, index) => (
            <NearbyjobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details${job?.job_id}`, { job })}
            />
          ))
        ) }
      </View>
    </View>
  )
}

export default Nearbyjobs