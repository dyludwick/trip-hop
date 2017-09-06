import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';
import Background from '../images/index-cover.jpg';

const Home = () => (
  <div>
    <section style={styles.cover}>
      <div style={styles.headingBlock}>
        <h1>Take a Trip.</h1>
        <h2 style={styles.headingMain}>{"We'd love to hear about it"}.</h2>
      </div>
    </section>
    <section>
      <div style={styles.divBlock}>
        <h2 style={styles.heading}>Recent Trips</h2>
        <div style={styles.row}>
          {
            TripAPI.getRecent().map(t => (
              <Link to={`/trips/previous/${t.number}`} key={t.number}>
                <img src={t.img} alt='trip' style={styles.img} />
              </Link>
            ))
          }
        </div>
        <h2 style={styles.heading}>Upcoming Trips</h2>
        <div style={styles.row}>
          {
            TripAPI.getFuture().map(t => (
              <Link to={`/trips/future/${t.number}`} key={t.number}>
                <img src={t.img} alt='trip' style={styles.img} />
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  </div>
);

const styles = {
  cover: {
    width: '100vw',
    height: '90vh',
    background: "linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  headingBlock: {
    marginLeft: '10%',
    fontFamily: 'Maven Pro, sans-serif',
    fontSize: '2.5rem',
    color: '#0A0908',
  },
  headingMain: {
    fontWeight: 'normal',
    fontSize: '2.5rem'
  },
  divBlock: {
    width: '80%',
    paddingBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  heading: {
    display: 'inline-block',
    padding: '15px 10px',
    marginBottom: '30px',
    marginTop: '50px',
    fontFamily: 'Maven Pro, sans-serif',
    fontWeight: 'normal',
    border: '1px solid #0A0908'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    width: '200px',
    height: '150px'
  }
}

export default Home;
