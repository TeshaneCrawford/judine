export default eventHandler(async (event) => {
  await requireUserSession(event)
  const form = await readFormData(event)
  const image = form.get('image') as File


  ensureBlob(image, { maxSize: '32MB', types: [
    'image/jpeg',
    'image/png',
    'image/heic',
    'image/webp',
    'image/gif',
    // @ts-expect-error: jpg format
    'image/jpg'
  ] })

  return hubBlob().put(image.name, image)
})
