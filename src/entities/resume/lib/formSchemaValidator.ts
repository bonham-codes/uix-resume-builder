import { z } from 'zod';

const field = z.object({
  name: z.string(),
  value: z.string(),
  label: z.string(),
  type: z.enum([
    'text',
    'number',
    'email',
    'url',
    'tel',
    'date',
    'checkbox',
    'radio',
    'select',
    'textarea',
    'file',
    'draggable',
  ]),
  placeholder: z.string(),
  required: z.boolean(),
  fluid: z.boolean(),
  fieldCategory: z.string().optional(),
});

export const formSchemaValidator = z.record(
  z.string(),
  z
    .object({
      label: z.string(),
      subTitle: z.string(),
    })
    .catchall(field),
);
