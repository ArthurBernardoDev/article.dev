import Image from "next/image";
import styled from 'styled-components'

const ContainerHeader = styled.header`
max-width: 1600px;
  margin-top: 30px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProfileContainer = styled.div`
  display: flex;
`

const ProfileContent = styled.div`
  display: flex; 
  flex-direction: column; 
  margin-right: 15px;
`
const Name = styled.span`
  text-align: right; 
  color: white; 
  font-weight: bold;
`
const Email = styled.span`
  color: #9699B0; 
  margin-top: 5px;
`

export default function Home() {
  return (
    <ContainerHeader >
        <Content>
            <div />
                <ProfileContainer>
                    <ProfileContent>
                    <Name>Arthur Bernardo</Name>
                    <Email>Contato.arthurbernardoas@gmail.com</Email>
                    </ProfileContent>
                    <Image alt={'logo'} src="https://github.com/ArthurBernardoDev.png" style={{borderRadius: '50%'}} width={50} height={50} />
                </ProfileContainer>
        </Content>
    </ContainerHeader>
  )
}
