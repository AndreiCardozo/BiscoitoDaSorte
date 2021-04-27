import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';


import biscoito from './src/biscoito.png'
import biscoitoAberto from './src/biscoitoAberto.png'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: biscoito
    };
    
    this.quebrabiscoito = this.quebrabiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você',
      'Não compense na ira o que lhe falta na razão',
      'Defeitos e virtudes são apenas dois lados da mesma moeda',
      'A maior de todas as torres começa no solo',
      'Não há que ser forte. Há que ser flexível',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
    ];

  }

  quebrabiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: biscoitoAberto
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img} />
        <Text style={styles.text}>{this.state.textoFrase}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.quebrabiscoito}
        >
          <View style={styles.btnView}>
            <Text
              style={styles.btnText}
            >
              Quebrar Botão
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  text: {
    fontSize: 20,
    color: '#0077b6',
    margin: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  img: {
    width: 250,
    height: 250
  },

  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#0077",
    borderRadius: 25,
    backgroundColor: "#0077",
  },

  btnView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default App;
