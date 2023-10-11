import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import useFetch  from '../../../hook/useFetch'
import reactDevelopper from '../../../data/reactDevelopper.json'

const Popularjobs = () => {
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
  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
  }

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
          <FlatList 
            data={reactDevelopper.data}
            renderItem={({ item }) => (
              <PopularjobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        ) }
      </View>
    </View>
  )
}

export default Popularjobs