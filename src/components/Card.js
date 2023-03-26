import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from './Card.module.css';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={title} />
      <Text fontSize='lg' color='black' className={`${styles.item} ${styles.title}`}>{ title }</Text>
      <Text fontSize='md' color='gray' className={`${styles.item} ${styles.description}`}>{description}</Text>
      <div className={`${styles.item} ${styles.seeMore}`}>
        <span className={styles.tips}> See More</span>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </div>
    </div>
  );
};

export default Card;