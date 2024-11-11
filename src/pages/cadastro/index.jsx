import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { api } from "../../services/api";

import {Header} from "./../../components/Header"
import {Input} from "./../../components/Input"

import { CadastroContainer, Column, Title, Wrapper, TitleCadastrar, SubTitleCadastrar, TermsText, TermsTextFooter} from "./style";
import { Button } from "../../components/Button";

const Cadastro = () =>{

    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors  }} = useForm({
        reValidateMode: "onSubmit",
        mode: "onSubmit"
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.post(`/users`, formData);
            alert('Sucesso! Usuário não pode ser adicionado');
            navigate("/login")
            
        }catch(e){
            alert('Usuário não pode ser adicionado');
        }
    };

    return(<>
        <Header />
        <CadastroContainer>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas
                    empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastrar>
                        Comece agora grátis
                    </TitleCadastrar>
                    <SubTitleCadastrar>
                        Crie sua conta e make the change._
                    </SubTitleCadastrar>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" name="name" leftIcon={<MdPerson />} control={control} />
                        {errors.name && <span>Nome completo é obrigatório</span>}
                        <Input placeholder="E-mail" name="email" type="email" leftIcon={<MdEmail />} control={control} />
                        {errors.name && <span>E-mail é obrigatório</span>}
                        <Input placeholder="Senha" name="senha" type="password" leftIcon={<MdLock />} control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <TermsText>
                        Ao clicar em "Criar minha conta grátis" declaro que aceito as Políticas de Privacidade e 
                        os Termos de Uso da DIO.
                    </TermsText>
                    <TermsTextFooter>
                        Já tenho conta. <span>Fazer login</span>
                    </TermsTextFooter>
                </Wrapper>
            </Column>
        </CadastroContainer>
        </>
    );
}


export {Cadastro}