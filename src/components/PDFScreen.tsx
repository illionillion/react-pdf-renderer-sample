import { Document, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { FC } from "react";

interface PageType {
    title: string
    contents: Content[]
}

interface Content {
    heading: string,
    body: string
}

/**
 * データ
 */
const documentData: PageType[] = [
    {
        title: "Title1",
        contents: [
            {
                heading: "Section1",
                body: "Content"
            },
            {
                heading: "Section2",
                body: "Content"
            },
            {
                heading: "Section3",
                body: "Content"
            },
        ]
    },
    {
        title: "Title2",
        contents: [
            {
                heading: "Section1",
                body: "Content"
            },
            {
                heading: "Section2",
                body: "Content"
            },
            {
                heading: "Section3",
                body: "Content"
            },
        ]
    },
    {
        title: "Title3",
        contents: [
            {
                heading: "Section1",
                body: "Content"
            },
            {
                heading: "Section2",
                body: "Content"
            },
            {
                heading: "Section3",
                body: "Content"
            },
        ]
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
    content: {
        margin: 10,
        padding: 10,
        // flexGrow: 1
    },
    section: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 22,
        paddingVertical: 8,
    },
    heading: {
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
        {documentData.map((item, index) => (
            <Page key={index} size="A4" style={styles.page}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.contents.map((content, i) => (
                        <View key={i} style={styles.section}>
                            <Text style={styles.heading}>{content.heading}</Text>
                            <Text style={styles.body}>{content.body}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        ))}
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