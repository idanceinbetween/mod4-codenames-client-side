import React, { useContext, Fragment } from 'react'
import { Route, Switch, __RouterContext } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import About from '../components/About'
import HomeContainer from './HomeContainer'
import GameContainer from './GameContainer'
import WordManager from '../components/WordManager'

const MainCanvas = ({ activateBlock, deactivateBlock }) => {
  const { location } = useContext(__RouterContext)

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' }
  })

  return (
    <Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route
              exact
              path='/'
              render={routerProps => (
                <HomeContainer
                  {...routerProps}
                  deactivateBlock={deactivateBlock}
                />
              )}
              // isBlocking={props.isBlocking}
            />
            <Route
              exact
              path='/play'
              render={routerProps => (
                <GameContainer {...routerProps} activateBlock={activateBlock} />
              )}
            />
            <Route
              exact
              path='/about'
              render={routerProps => (
                <About {...routerProps} deactivateBlock={deactivateBlock} />
              )}
            />
            <Route
              exact
              path='/wordman'
              render={routerProps => (
                <WordManager
                  {...routerProps}
                  deactivateBlock={deactivateBlock}
                />
              )}
            />
            <Route
              component={() => (
                <img
                  src={require('../img/404.jpg')}
                  alt='404 Page not found error'
                />
              )}
            />
          </Switch>
        </animated.div>
      ))}
    </Fragment>
  )
}

export default MainCanvas
