import React from 'react'
import styles from './CreatePost.module.css'

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useAuthValue } from '../../context/AuthContext';


const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Valor digitado foi ${title}`)
  }

  return (
    <div className={styles.create_post}>
        <h1>
            Criar Post
        </h1>
        <p>Escreva sobre oque quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="titlePost">
            <span>Título:</span>
            <input 
              type="text" 
              name="titlePost" 
              id="titlePost" 
              placeholder='Pense em um título...'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              />
          </label>
          <label htmlFor="imagePost">
            <span>URL da imagem:</span>
            <input 
              type="image"
              name="imagePost"
              required
              placeholder='Insira a imagem que representa seu post.'
              src="../" 
              alt="example_img"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              />
          </label>
          <label htmlFor="bodyPost">
            <span>Conteúdo:</span>
            <textarea
              name="bodyPost"
              id="bodyPost"
              required
              placeholder='Conteúdo do post.'
              onChange={(e) => setBody(e.target.value)}
              value={body}
              />
          </label>
          <label htmlFor="tagsPost">
            <span>URL da imagem:</span>
            <input 
              type="text"
              name="tagsPost"
              required
              placeholder='Insira seus hashtags #postandoMuito, separados por vírgula.'              
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              />
          </label>
          {error && 
            <>
              {error}
            </>
          }
          {loading && 
            <>
              {loading}
            </>
          }
          {loading && 
            <button disabled>Aguarde</button>
          }
          {!loading &&
            <button type="submit" className='btn btn-success'>Postar</button>
          }
          <Link to="/dashboard">
            <button className='btn btn-danger'>Voltar</button>
          </Link>
          
        </form>
    </div>
  )
}

export default CreatePost 