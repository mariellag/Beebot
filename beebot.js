/**
 * Name: Mariella Gauvreau
 * Date: December 15, 2018
 * This is the JS to implement the UI for the Beebot page. It gives functionality to the website.
 */

 "use strict";

/*
Connie Wang
CSE154
Animates text for header on about me page
*/

(function() {
  const HEADER = ["The Beebot", "save the bees!!", "bzzzzzz"];
  const TYPE_INTERVAL = 70; //ms
  const CURSOR_INTERVAL = 300;
  const WORD_INTERVAL = 1500;

  let headerIndex = 0;
  let characterIndex = 0;
  let timer = null;


  window.onload = function() {
    typeWord();
    setInterval(animateCursor, CURSOR_INTERVAL);
  }

  function animateCursor() {
    $("cursor").classList.toggle("console");
  }

  /*
   * Types the next letter of the word, one at a time
   * When the word is done, it outputs the word to the console and waits
   * WORD_INTERVAL before deleting the word
   */
  function typeLetter() {
    let character = HEADER[headerIndex][characterIndex];
    if (characterIndex < HEADER[headerIndex].length) {
        $("hello-world").innerText = $("hello-world").innerText + character;
        characterIndex++;
    } else {
        characterIndex = 0;
        console.log(HEADER[headerIndex]);
        if(headerIndex < HEADER.length - 1) {
            headerIndex++;
        } else {
            headerIndex = 0;
        }
        clearInterval(timer);
        setTimeout(deleteWord, WORD_INTERVAL);
    }
  }

  /*
   * Types the entire word
   */
  function typeWord() {
    timer = setInterval(typeLetter, TYPE_INTERVAL);
  }

  /*
   * Deletes letters from the word, one letter at a time.
   * When the word is completely deleted, it waits WORD_INTERVAL
   * and moves to the next word
   */
  function deleteLetter() {
    let word = $("hello-world").innerText;
    if (word.length > 0) {
        $("hello-world").innerText = word.substring(0, word.length - 2);
    } else {
        clearInterval(timer);
        setTimeout(typeWord, WORD_INTERVAL);
      }
  }

  /*
   * Deletes the entire word
   */
  function deleteWord() {
      timer = setInterval(deleteLetter, TYPE_INTERVAL);
  }

  /*
   * returns dom element with given id
   */
  function $(id) {
      return document.getElementById(id);
  }


})();
