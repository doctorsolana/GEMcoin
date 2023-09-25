import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          GEM CASINO
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba. 
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://birdeye.so/token/E7BGDtpNXUTqPNbZxKHiLowgLddiAeuKcByD7tSnfYWD?chain=solana"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Buy $GEM
          </Button>
        </div>
      </Section>
    </div>
  )
}
