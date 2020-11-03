import React, { Component } from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './stylesheet';
import { info, profilePicture, about, skills, experience, education, consent } from '../input';



export class Resume extends Component {
  render() {
    return (
      <Document title='John Doe'>
        <Page size="A4" style={styles.page}>

          <Header />

          <About />

          <View style={[styles.section, { flexDirection: 'row' }]}>
            <SideBar />
            <MainSection />
          </View>

          <Consent />

        </Page>
      </Document>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ textAlign: "center", width: "75%" }}>
          <Text style={styles.name}> {info.name} </Text>
          <View style={styles.contact}>
            <Text>{info.phone + ' • '}</Text>
            <Text>{info.email}</Text>
          </View>
        </View>
        <Image style={styles.image} source={profilePicture} />
      </View>
    )
  }
};

class About extends Component {
  render() {
    return (
      <View style={styles.section}>
        <Text style={styles.heading}>&lt; About me &gt;</Text>
        <Text style={{ marginTop: 10, lineHeight: 1.2, fontFamily: 'LibreFranklinLight' }}>{about}</Text>
      </View>
    )
  }
}



class SideBar extends Component {
  render() {
    return (
      <View style={styles.sidebar}>
        <Text style={[styles.heading, { marginBottom: 10 }]}>&lt; Skills &gt;</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {skillList}
        </View>
      </View>
    )
  }
}

class Skill extends Component {
  render() {
    return (
      <Text style={styles.skill} key={this.props.key}>{this.props.skill}</Text>
    )
  }
}

const skillList = skills.map((element, index) =>
  <Skill key={index} skill={element} />
);

class MainSection extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.heading}> &lt; Experience &gt;</Text>
        <View>
          {expList}
        </View>

        <Text style={[styles.heading, { marginTop: 20 }]}>&lt; Education &gt;</Text>
        <View>
          {eduList}
        </View>
      </View>
    )
  }
}

class Experience extends Component {
  render() {
    return (
      <View key={this.props.key} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16 }}>{this.props.title}</Text>

        <View style={{ flexDirection: 'row', fontFamily: 'LibreFranklinBold' }}>
          <Text>{this.props.company + ' • '}</Text>
          <Text>{this.props.location + ' • '}</Text>
          <Text>{this.props.started + '-' + this.props.ended}</Text>
        </View>

        <Text style={{ fontSize: 10, marginTop: 5 }}>{this.props.desc}</Text>

      </View>
    )
  }
}

const expList = experience.map((element, index) =>
  <Experience key={index} title={element.title} company={element.company} location={element.location} started={element.started} ended={element.ended} desc={element.desc} />
);

class Education extends Component {
  render() {
    return (
      <View key={this.props.key} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16 }}>{this.props.major}</Text>

        <View style={{ flexDirection: 'row', fontFamily: 'LibreFranklinBold' }}>
          <Text>{this.props.school + ' • '}</Text>
          <Text>{this.props.title + ' • '}</Text>
          <Text>{this.props.started + '-' + this.props.ended}</Text>
        </View>

        <Text style={{ fontSize: 10, marginTop: 5 }}>{this.props.desc}</Text>

      </View>
    )
  }
}

const eduList = education.map((element, index) =>
  <Education key={index} major={element.major} school={element.school} title={element.title} started={element.started} ended={element.ended} desc={element.desc} />
);

class Consent extends Component {
  render() {
    return (
      <View style={styles.consent}>
        <Text>{consent}</Text>
      </View>
    )
  }
}