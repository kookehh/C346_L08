
import React, {useState} from 'react';
import {ScrollView, Text, Button, Alert, View, StyleSheet} from 'react-native';
import Question from './components/Question';


const AllManhwa = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'lavenderblush',
            padding: 12
        },
        header: {
            backgroundColor: 'darkslateblue',
            padding: 20,
            borderRadius: 12,
            marginBottom: 20,
            alignItems: 'center',
        },
        quiz: {
            color: 'pink',
            fontSize: 13,
            fontWeight: 'bold',
            marginBottom: 10
        },
        title: {
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        subtitle: {
            color: 'lavender',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 10
        },
        buttonBox: {
            marginTop: 5,
            borderRadius: 15,
        }
    });

    return (
        <ScrollView style={styles.container}>

            <Text></Text>
            <View style={styles.header}>
                <Text style={styles.quiz}>
                    ~The Manhwa Quiz~
                </Text>

                <Text style={styles.title}>
                    How well do you know your Manhwa?✨
                </Text>

                <Text style={styles.subtitle}>
                    Can you get them all right?
                </Text>
            </View>

            <Question
                number="QUESTION 1"
                picture={{uri: 'https://i.pinimg.com/736x/1f/41/b5/1f41b50566c9b68d5c82677ea595a0f1.jpg'}}
                answer={answer1}
                setAnswer={setAnswer1}
                option1="Who Made Me a Princess"
                option2="True Beauty"
                option3="The Remarried Empress"
                hint="A young princess must survive life in a royal palace
                      while dealing with her powerful father."
            />

            <Question
                number="QUESTION 2"
                picture={{uri: 'https://preview.redd.it/is-this-the-cover-of-season-3-father-i-dont-want-this-v0-arlv9gfvei6a1.jpg?auto=webp&s=2cb065e5228ab7fb926a141fe38ddb488d0e303e'}}
                answer={answer2}
                setAnswer={setAnswer2}
                option1="Secret Lady"
                option2="Actually, I'm the real one"
                option3="Father, I don't want this marriage"
                hint="A young noblewoman tries to change her fate while dealing
                      with misunderstandings involving her father and an unwanted marriage."
            />

            <Question
                number="QUESTION 3"
                picture={{uri: 'https://i.pinimg.com/736x/7a/cb/5b/7acb5bfeef91ebe49a6375882c067084.jpg'}}
                answer={answer3}
                setAnswer={setAnswer3}
                option1="A Stepmother's Marchen"
                option2="I was born as the Second Daughter"
                option3="The Villainess Reverses the Hourglass"
                hint="A young girl is born into a royal family as the second daughter
                      and experiences a new life surrounded by her family."
            />

            <View style={styles.buttonBox}>
                <Button
                    title="Submit Answers"
                    color="mediumorchid"
                    onPress={() => {
                        let score = 0;

                        if (answer1 == 'Who Made Me a Princess') {
                            score = score + 1;
                        }

                        if (answer2 == 'Father, I don\'t want this marriage') {
                            score = score + 1;
                        }

                        if (answer3 == 'I was born as the Second Daughter') {
                            score = score + 1;
                        }

                        if (score == 0 || score == 1) {
                            Alert.alert(
                                'Quiz Result',
                                'You got ' + score + '/3. Try again!'
                            );
                        }
                        else if (score == 2) {
                            Alert.alert(
                                'Quiz Result',
                                'Good job! Almost perfect! 2/3'
                            );
                        }
                        else {
                            Alert.alert(
                                'Quiz Result',
                                'Excellent! Perfect score! 3/3'
                            );
                        }
                    }}
                />
            </View>

        </ScrollView>
    );
};

export default AllManhwa;
