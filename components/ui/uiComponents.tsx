import styled from "styled-components";

export const CommentsContainer = styled.div`
  max-width: 400px;
  background-color: #7ab1ff;
  color: #fff;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
  cursor: pointer;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
`;

export const CreateCommentContainer = styled.div`
  max-width: 400px;
  background-color: #7ab1ff;
  color: #fff;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CreateCommentInput = styled.input`
  flex-basis: 80%;
  height: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  text-align: center;
  padding-right: 5px;
  cursor: pointer;

  & :focus {
    outline: none;
  }
`;

export const CreateCommentBtn = styled.button`
  flex-basis: 15%;
  height: 30px;
  background-color: #5bd397;
  color: #fff;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  min-width: 40px;
  cursor: pointer;

  & :focus {
    outline: none;
  }
`;

export const CreateCommentForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const NavBar = styled.nav`
  background-color: #106ef3;
  color: #fff;
  padding: 20px;
  user-select: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NavBarLink = styled.a`
  margin: 0 20px;
  cursor: pointer;
`;

export const PostContainer = styled.div`
  max-width: 400px;
  background-color: #7ab1ff;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
`;

export const PostTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PostSubTitle = styled.p`
  font-size: 18pxpx;
`;

export const SinglePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  background-color: #940cfe;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  user-select: none;
  cursor: pointer;
`;

export const SavePostBtn = styled.button`
  align-self: flex-end;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  background-color: transparent;
  border-color: transparent;

  & :focus {
    outline: none;
  }
`;

export const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;
export const SvgRotated = styled.svg`
  transform: rotate(45deg);
  height: 100%;
  width: 100%;
`;

export const TextField = styled.input`
  text-align: center;
  width: 100%;
  height: 70px;
  background-color: #a771fe;
  color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 25px;
  margin-top: 16px;
  user-select: none;
  text-align: center;
  border: none;
  font-size: 22px;
  cursor: pointer;

  & ::placeholder {
    color: #ffffff;
  }
  & :focus {
    outline: none;
  }
`;

export const CreateNewPostForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 60px;
  border-radius: 20px;
  border: none;
  background-color: #761cea;
  transition: all 200ms ease;
  cursor: pointer;

  color: #fff;
  & :focus {
    outline: none;
  }
  & :hover {
    outline: none;
    background-color: #8a39f5;
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
