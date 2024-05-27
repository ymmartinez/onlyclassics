import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';

interface Questions {
    question: string;
    answer?: string;
}
const Questions = ( { articleId }: { articleId: number } ) => {
    const [newQuestion, setNewQuestion] = React.useState<string>('');
    const [questions, setQuestions] = React.useState<Questions[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        axios.get(`http://localhost:3000/questions/${articleId}`,
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const postQuestion = async () => {
        setLoading(true);
        axios.post(`http://localhost:3000/questions`, {
            question: newQuestion,
            article_id: articleId
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            getQuestions();
            setNewQuestion('');
        }).catch((error) => {
            console.log(error);
        });
        setLoading(false);
    }

    const questionsTemplate = questions.map((question, index) => {
        return (
            <Fieldset key={index} legend={question.question} toggleable className='mb-3'>
                <p className="m-0">{question.answer?.length ? question.answer : 'Todavia no hay respuesta'}</p>
            </Fieldset>
        );
    });

    const emptyTemplate = (
        <div className="flex justify-content-center align-content-center align-items-center">
            <p>Todavia nadie hizo preguntas, se el primero!</p>
        </div>
    );

    const newQuestionTemplate = (
        <div className="">
            <InputTextarea
                placeholder="Hace una pregunta"
                className="w-full border-round-xl"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                />

            <div className="flex justify-content-end">
                <Button
                    loading={loading}
                    label="Preguntar"
                    className="border-round-xl mt-2"
                    style={{ backgroundColor: '#00A9FF' }}
                    onClick={postQuestion}
                />
            </div>
        </div>
    );


    return (
        <Card title="Preguntas al vendedor" className="border-round-xl mt-4">
            {questions.length > 0 ? questionsTemplate : emptyTemplate}

            <Fieldset legend="Hace una pregunta">
                {newQuestionTemplate}
            </Fieldset>
        </Card>
    );
}

export default Questions;