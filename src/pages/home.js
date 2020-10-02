import React from 'react'
import { View, Text, Image, StyleSheet, CardItem } from 'react-native'
import CardMenu from '../component/cardMenu'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../action"





const Home = () => {

    const [Head, setHead] = React.useState(["Country", "New", "Active", "Recovered", "Total"])
    const dispatch = useDispatch()
    const { dataAPI } = useSelector((state) => {
        return {
            dataAPI: state.apiReducer.dataAPI
        }
    })
    React.useEffect(() => {
        dispatch(getData())
    }, [])

    console.log(dataAPI)
    const renderData = () => {
        let tablebody = []
        dataAPI.map((item) => {
            tablebody.push([item.cases.new === null ? 0 : item.cases.new,
            item.cases.active === null ? 0 : item.cases.active,
            item.cases.recovered === null ? 0 : item.cases.recovered,
            item.cases.total === null ? 0 : item.cases.total])
        })

        return tablebody
    }

    {
        return (
            <ScrollView style={{ backgroundColor: '#ecf0f1' }}>
                <Image source={{ uri: "https://devpolicy.org/wp-content/uploads/2015/02/image13.png" }} style={{ height: 300, width: 400, borderRadius: 0 }} />
                <Text style={styles.home}>News</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, marginTop: 10, width: "100%" }}>




                    <CardMenu names={'Total'}/>
                    {/* <CardMenu icons={require('../image/iconMenu/worker')} names={'General Service'} /> */}
                    <CardMenu names={'Recovered'} />
                    <CardMenu names={'Deaths'} />
                    <Image source={{ uri: "https://img.okezone.com/content/2020/08/25/18/2267287/berita-baik-afrika-akan-dinyatakan-bebas-polio-liar-d1Z5b21PFU.jpg" }} style={{ height: 300, width: 400, borderRadius: 0 }} />


                    {/* <CardMenu icons={require('../image/iconMenu/automation.png')} names={'General Service'} /> */}
                    {/* <CardMenu icons={require('../image/iconMenu/cleaning.png')} names={'Wash Service'} />
                    <CardMenu icons={require('../image/iconMenu/consulting.png')} names={'Customer Service'} />
                    <CardMenu icons={require('../image/iconMenu/paint.png')} names={'Repaint'} />
                    <CardMenu icons={require('../image/iconMenu/worker.png')} names={'Custom Service'} />
                    <CardMenu icons={require('../image/iconMenu/sale.png')} names={'Promo'} /> */}
                </View>
            </ScrollView>

        )

    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink"
    },
    button: {
        alignSelf: "center",
        padding: 15
    },
    home: {
        // width: 100,
        // height: 100,
        fontSize: 40,
        alignSelf: 'center',
        // backgroundColor: '#0abde3'
    },
})

export default Home