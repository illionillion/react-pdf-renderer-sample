import { Document, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { FC } from "react";

interface documentDataType {
    title: string
    body: string
}

/**
 * データ
 */
const documentData: documentDataType[] = [
    {
        title: "Title1",
        body: "Content"
    },
    {
        title: "Title2",
        body: "Content"
    },
    {
        title: "Title3",
        body: "Content"
    },
]

/**
 * PDFのスタイル
 */
const styles = StyleSheet.create({
    page: {
        // flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        // flexGrow: 1
    },
    title: {
        fontSize: 20,
        paddingVertical: 5,
    },
    body: {
        fontSize: 18
    }
});

/**
 * PDF描画
 * @returns
 */
const MyDocument: FC = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {documentData.map((item, index) => (
                <View key={index} style={styles.section}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

/**
 * DOMにマウント
 * @returns 
 */
export const PDFScreen: FC = () => {
    return <PDFViewer width="100%" height="100%">
        <MyDocument />
    </PDFViewer>
}