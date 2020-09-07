import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import { getData } from "../action"


const Info = () => {
    const [tableHead, setTableHead] = React.useState([
        "Region",
        "New",
        "Cases",
        "Recovered",
        "Deaths"])
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

    const renderTitle = () => {
        let tableTitle = []
        dataAPI.map((item) => {
            tableTitle.push([item.country])
        })
        return tableTitle
    }

    const renderTable = () => {
        return (
            <ScrollView style={styles.container}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} flexArr={[1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={dataAPI ? renderTitle() : []} style={styles.title} heightArr={[50, 50]} textStyle={styles.text} />
                        <Rows data={dataAPI ? renderData() : []} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </ScrollView>
        )
    }
    return (
        <ScrollView style={styles.root}>
            <Image source={{ uri: "https://devpolicy.org/wp-content/uploads/2015/02/image13.png" }} style={{ height: 300, width: 400, borderRadius: 0 }} />
            <Text style={styles.home}>LIVE UPDATE</Text>
            {renderTable()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
        // backgroundColor : '#0abde3'
    },
    button: {
        alignSelf: "center",
        padding: 15
    },
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        // backgroundColor: '#0abde3',
        width: 400
    },
    head: {
        height: 40,
        // backgroundColor: '#0abde3'
    },

    text: { margin: 6 },
    title: { flex: 1, },
    row: { height: 50 },
    wrapper: { flexDirection: 'row' },

    home: {
        // width: 100,
        // height: 100,
        fontSize: 40,
        alignSelf: 'center',
        color: 'black'
        // backgroundColor: '#0abde3'
    },
})

export default Info












// import React from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native"
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


// import { getData } from "../action"


// const Info = () => {
//     const [tableHead, setTableHead] = React.useState(["Country", "New", "Active", "Recovered", "Total"])
//     const dispatch = useDispatch()
//     const { dataAPI } = useSelector((state) => {
//         return {
//             dataAPI: state.apiReducer.dataAPI
//         }
//     })
//     React.useEffect(() => {
//         dispatch(getData())
//     }, [])

//     console.log(dataAPI)
//     const renderData = () => {
//         let tablebody = []
//         dataAPI.map((item) => {
//             tablebody.push([item.cases.new === null ? 0 : item.cases.new,
//             item.cases.active === null ? 0 : item.cases.active,
//             item.cases.recovered === null ? 0 : item.cases.recovered,
//             item.cases.total === null ? 0 : item.cases.total])
//         })

//         return tablebody
//     }

//     const renderTitle = () => {
//         let tableTitle = []
//         dataAPI.map((item) => {
//             tableTitle.push([item.country])
//         })
//         return tableTitle
//     }

//     const renderTable = () => {
//         return (
//             <ScrollView style={styles.container}>
//                 <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
//                     <Row data={tableHead} flexArr={[1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
//                     <TableWrapper style={styles.wrapper}>
//                         <Col data={dataAPI ? renderTitle() : []} style={styles.title} heightArr={[50, 50]} textStyle={styles.text} />
//                         <Rows data={dataAPI ? renderData() : []} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
//                     </TableWrapper>
//                 </Table>
//             </ScrollView>
//         )
//     }
//     return (
//         <ScrollView style={styles.root}>
//             <Image source={{ uri: "https://devpolicy.org/wp-content/uploads/2015/02/image13.png" }} style={{ height: 300, width: 400, borderRadius: 0 }} />
//             <Text style={styles.home}>LIVE UPDATE</Text>
//             {renderTable()}
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//         // justifyContent: "center",
//         // alignItems: "center"
//         // backgroundColor : '#0abde3'
//     },
//     button: {
//         alignSelf: "center",
//         padding: 15
//     },
//     container: {
//         flex: 1,
//         padding: 16,
//         paddingTop: 30,
//         // backgroundColor: '#0abde3',
//         width: 400
//     },
//     head: {
//         height: 40,
//         // backgroundColor: '#0abde3'
//     },

//     text: { margin: 6 },
//     title: { flex: 1,  },
//     row: { height: 50 },
//     wrapper: { flexDirection: 'row' },

//     home: {
//         // width: 100,
//         // height: 100,
//         fontSize: 40,
//         alignSelf: 'center',
//         color: 'black'
//         // backgroundColor: '#0abde3'
//     },
// })

// export default Info