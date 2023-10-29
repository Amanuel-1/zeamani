async function createPost(formData:) {
    const { title, description, content, coverImage, authorId, tagNames } = formData;
  
    const post = await prisma.blogPost.create({
      data: {
        title,
        description,
        content,
        coverImage,
        author: {
          connect: { id: authorId },
        },
        tags: {
          connectOrCreate: tagNames.map((tagName) => ({
            where: { name: tagName },
            create: { name: tagName },
          })),
        },
      },
      include: {
        tags: true,
      },
    });
  
    console.log('Created post:', post);
  }