import React from 'react';

interface BlogFormProps {
  title: string;
  content: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitText: string;
}

const BlogForm: React.FC<BlogFormProps> = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  submitText,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
        className="form-input"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={onContentChange}
        className="form-textarea"
      />
      <button type="submit" className="form-button">
        {submitText}
      </button>
    </form>
  );
};

export default BlogForm;