import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    outerBorder: {
        borderWidth: 1,
        borderColor: 'mediumpurple',
        borderRadius: 18,
        padding: 4,
        marginBottom: 20
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 14,
        padding: 15,
        alignItems: 'center',
    },
    questionNumber: {
        backgroundColor: 'darkslateblue',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 8,
        alignSelf: 'stretch'
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 15,
        borderRadius: 8,
    },
    question: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'darkslateblue',
        textAlign: 'center',
        marginBottom: 12,
    },
    hintButton: {
        width: 160,
        marginBottom: 10,
        borderRadius: 30,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'mediumpurple',
    },
    hintButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    hintBox: {
        backgroundColor: 'lavenderblush',
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        width: '100%',
    },
    hintTitle: {
        color: 'purple',
        fontWeight: 'bold',
        marginBottom: 5
    },
    hintText: {
        color: 'dimgray',
        fontSize: 14,
        lineHeight: 20,
    },
    answerLabel: {
        fontWeight: 'bold',
        color: 'darkslateblue',
        marginTop: 10,
        marginBottom: 8
    },
    pickerBox: {
        backgroundColor: 'lavender',
        borderWidth: 1,
        borderColor: 'plum',
        borderRadius: 10,
        width: '100%'
    }
});

const Question = ({picture, answer, setAnswer, option1, option2, option3, hint, number}) => {

    const [showHint, setShowHint] = useState(false);

    return (
        <View style={styles.outerBorder}>
            <View style={styles.card}>

                <Text style={styles.questionNumber}>
                    {number}
                </Text>

                <Text style={styles.question}>
                    Which Manhwa does this cover belong to?
                </Text>

                <Image
                    source={picture}
                    style={styles.image}
                />

                <TouchableOpacity
                    style={styles.hintButton}
                    onPress={() => setShowHint(!showHint)}
                >
                    <Text style={styles.hintButtonText}>
                        {showHint ? 'Hide Story Hint' : 'Show Story Hint'}
                    </Text>
                </TouchableOpacity>

                {showHint && (
                    <View style={styles.hintBox}>
                        <Text style={styles.hintTitle}>
                            A Little Story Clue
                        </Text>

                        <Text style={styles.hintText}>
                            {hint}
                        </Text>
                    </View>
                )}

                <Text style={styles.answerLabel}>
                    Your Answer
                </Text>

                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={answer}
                        onValueChange={(value) => setAnswer(value)}
                    >
                        <Picker.Item label="Select an answer" value="" />
                        <Picker.Item label={option1} value={option1} />
                        <Picker.Item label={option2} value={option2} />
                        <Picker.Item label={option3} value={option3} />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

export default Question;
