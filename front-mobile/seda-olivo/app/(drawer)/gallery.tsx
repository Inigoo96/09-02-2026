import { View, FlatList, Image, StyleSheet, Pressable, Modal, Text } from "react-native";
import { useState } from "react";

const images = [
    { src: require("../../assets/images/gallery1.jpg"), caption: "Neón & barra" },
    { src: require("../../assets/images/gallery2.jpg"), caption: "Santorini vibes" },
    { src: require("../../assets/images/gallery3.jpg"), caption: "Plato firma" },
    { src: require("../../assets/images/gallery4.jpg"), caption: "Tapas para compartir" },
    { src: require("../../assets/images/gallery5.jpg"), caption: "Cóctel de autor" },
    { src: require("../../assets/images/gallery6.jpg"), caption: "Mesa nocturna" },
];

export default function GalleryScreen() {
    const [selected, setSelected] = useState<{ src: any; caption: string } | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galería</Text>

            <FlatList
                data={images}
                numColumns={2}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <Pressable style={styles.tile} onPress={() => setSelected(item)}>
                        <Image source={item.src} style={styles.thumb} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{item.caption}</Text>
                        </View>
                    </Pressable>
                )}
            />

            <Modal visible={!!selected} transparent animationType="fade">
                <Pressable style={styles.modal} onPress={() => setSelected(null)}>
                    {selected && (
                        <View style={styles.modalCard}>
                            <Image source={selected.src} style={styles.full} />
                            <Text style={styles.modalCaption}>{selected.caption}</Text>
                            <Text style={styles.modalHint}>Toca para cerrar</Text>
                        </View>
                    )}
                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#020617", flex: 1, padding: 10 },
    title: { color: "#fff", fontSize: 26, fontWeight: "900", marginBottom: 10 },

    tile: { width: "50%", padding: 6 },
    thumb: { width: "100%", height: 170, borderRadius: 14 },
    badge: {
        position: "absolute",
        left: 14,
        bottom: 14,
        right: 14,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 999,
        backgroundColor: "rgba(2,6,23,0.55)",
        borderWidth: 1,
        borderColor: "rgba(255,78,205,0.22)",
    },
    badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },

    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.92)",
        justifyContent: "center",
        alignItems: "center",
        padding: 18,
    },
    modalCard: {
        width: "100%",
        maxWidth: 520,
        backgroundColor: "#0f172a",
        borderRadius: 18,
        padding: 12,
        borderWidth: 1,
        borderColor: "rgba(56,189,248,0.20)",
    },
    full: { width: "100%", height: 360, borderRadius: 14 },
    modalCaption: { color: "#fff", fontWeight: "900", fontSize: 16, marginTop: 10 },
    modalHint: { color: "#94a3b8", marginTop: 6, fontSize: 12 },
});
