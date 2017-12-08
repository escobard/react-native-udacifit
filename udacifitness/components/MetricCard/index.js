import React, { Component } from 'react'
import { View, StylSheet, Text } from 'react-native'

import DateHeader from '../DateHeader'

import { getMetricMetaInfo } from '../../utils/helpers'
import { gray } from '../../utils/colors'

import styles from './styles'

export default function MetricCard({date, metrics}){
	
	let metricsArray = Object.keys(metrics)

	return(

		<View>

			{date && <DateHeader date={date} />}

			{metricsArray.map((metric) => {
				const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(metric)

				return (

					<View style={styles.metric} key={metric}>

						{getIcon()}

						<View>
							<Text style={styles.metricTitle}>{displayName}</Text>
							<Text style={styles.metricText}>{metrics[metric]} {unit}</Text>
						</View>

					</View>


				)


			})}

		</View>

	)
}