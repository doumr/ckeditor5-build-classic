/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Alignment,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	FontSize,
	FontColor,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'bold',
			'italic',
			'alignment',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	fontColor: {
		colors: [
			{
				color: 'var(--black, #000)',
				label: 'Černá',
			},
			{
				color: 'var(--gray-dark, #343a40)',
				label: 'Tmavě šedá',
			},
			{
				color: 'var(--gray, #6c757d)',
				label: 'Šedá',
			},
			{
				color: 'var(--light, #f8f9fa)',
				label: 'Světle šedá',
			},
			{
				color: 'var(--white, #fff)',
				label: 'Bílá',
			},
			{
				color: 'var(--blue, #007bff)',
				label: 'Modrá',
			},
			{
				color: 'var(--indigo, #6610f2)',
				label: 'Indigo',
			},
			{
				color: 'var(--purple, #6f42c1)',
				label: 'Fialová',
			},
			{
				color: 'var(--pink, #e83e8c)',
				label: 'Růžová',
			},
			{
				color: 'var(--red, #dc3545)',
				label: 'Červená',
			},
			{
				color: 'var(--orange, #fd7e14)',
				label: 'Oranžová',
			},
			{
				color: 'var(--yellow, #ffc107)',
				label: 'Žlutá',
			},
			{
				color: 'var(--green, #28a745)',
				label: 'Zelená',
			},
			{
				color: 'var(--teal, #20c997)',
				label: 'Šedozelená',
			},
			{
				color: 'var(--cyan, #17a2b8)',
				label: 'Tyrkysová',
			},
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'cs'
};
