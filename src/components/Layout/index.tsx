import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
}

const AppLayout = (props: Props) => {
  return (
    <SafeAreaView>
      {props.children}
    </SafeAreaView>
  )
}

export default AppLayout

const styles = StyleSheet.create({})