/* ==UserStyle==
@name           web.telegram.org/a/
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    A new userstyle
@author         Me
==/UserStyle== */
@-moz-document url-prefix("https://web.telegram.org/") {

	/* 在此插入代码... */
/*	.message-content.text.has-action-button.media.is-forwarded.has-shadow.has-solid-background.has-footer {
		width: 1000px !important;
	}*/

	.messages-container,
	.message-date-group,
	.message-content-wrapper.can-select-text,
	.content-inner.forwarded-message,
	.content-inner.forwarded-message .nRjVJOQv.WebPage,
	.WebPage-text.WebPage-text_interactive,
	.WebPage--content,
	.WebPage.without-media,
	.site-description,
	.content-inner,
	.text-content.clearfix.with-meta,
	.message-content-wrapper.can-select-text,
	.Message.message-list-item,
	.site-title,
	.nRjVJOQv.WebPage,
	.nRjVJOQv.WebPage.with-square-photo,
	.nRjVJOQv.WebPage.with-square-photo.with-quick-button,
	.Reactions,
	.message-content,
	br-span,
	.message-text,
	.message-title {
		width: 900px !important;
		overflow: visible !important;
		font-size: 15px !important;
	}
	/*950*/
	/*1300*/
	.messages-container {
		margin-left: 0px !important;
		font-size: 16px !important;
		padding: 0 !important;
	}
	.media-inner.interactive {
		height: 200px !important;
		width: 200px !important;
		border-radius: 4px !important;
		font-size: 16px !important;
	}
	.media-inner.square-image {
		width: 80px !important;
		height: 80px !important;
		left: -534px !important;
		
	}
	.WebPage-text.WebPage-text_interactive{
		z-index: 1 !important;
	}
	.text-content.clearfix.with-meta {
		line-height: 28px !important;
		font-size: 16px !important;
	}
	.MessageMeta {
		display: none !important;
	}
	.file-ext,
	.file-icon-container .file-ext,
	.file-icon.orange .file-ext,
	.file-icon.green .file-ext {
		font-size: 10px !important;
	}
	.file-title,
	.file-info .file-title {
		font-size: 14px !important;
	}
	.file-info {
		margin-left: 10px !important;
	}
	.file-title,
	.file-subtitle {
		margin-left: 25px;
	}
	.file-icon-container,
	.action-icon.icon.icon-download {
		height: 50px !important;
	}
	.text-content.clearfix.with-meta {
		font-size: 16px !important;
	}
	.sticky-date.interactive {
		width: 200px !important;
	}
	.Button.message-action-button.tiny.translucent-white.round {
		width: 26px !important;
		height: 26px !important;
		padding: 0 7px 7px 0 !important;
	}
	.icon.icon-share-filled,
	.icon.icon-arrow-right {
		width: 16px !important;
		height: 16px !important;
	}

	/* 文件下载 */
	.file-icon-container,
	.file-icon.green,
	.file-icon.orange,
	.file-icon.red,
	.file-icon.default,
	.action-icon.icon.icon-download,
	.file-preview.media-inner {
		width: 30px !important;
		height: 30px !important;
	}
	.file-icon.green .file-ext,
	.file-icon.orange .file-ext,
	.file-icon.red .file-ext,
	.file-icon.default .file-ext {
		font-size: 8px !important;
	}
	.file-icon.green,
	.file-icon.orange,
	.file-icon.red,
	.file-icon.default {
		padding-bottom: 0px !important;
	}
	.file-icon-container {
		margin: 0 !important;
	}

	.VideoPlayer,
	.VideoPlayer video {
		width: 1100px !important;
		height: 700px !important;
	}
	/* 链接 */
	/* #fe0032 */
	.text-entity-link {
		/*color: #2ea1da !important;*/
		color: #fe0032 !important;
		text-decoration: none !important;
	}
	.text-entity-link:hover {
		text-decoration: none !important;
	}
	/* #2ea1da */
	.text-entity-link.word-break-all {
		color: #2ea1da !important;
		text-decoration: none !important;
	}
	/*.text-entity-link.word-break-all:hover{
		color: #0865fe !important;
		text-decoration: none !important;
	}*/
	.message-action-buttons {
		opacity: 0.05 !important;
	}
	.CommentButton {
		background-color: #212121 !important;
	}
	.Button.cxwA6gDO.default.secondary.round:hover {
		background-color: #212121 !important;
	}
	.quick-reaction{
		display: none !important;
	}/*
	.content-inner.with-subheader .media-inner{
		left: -440px !important;
	}
	.content-inner.with-subheader .message-subheader .EmbeddedMessage {
		left: -440px !important;
	}*/
	.message-title,
	.CommentButton{
		color: #f68136 !important;
		/*border-bottom: solid 2px #f68136 !important;*/
	}
	.message-title{
		border:0 !important;
	}
	/*.message-content{
		border-bottom: solid 2px #f68136 !important;
	}*/
	.message-content-wrapper.can-select-text{
		padding-bottom: 2.1px !important;
		border-bottom: solid 3px #f68136 !important;
	}
	.Message{
		margin: 0 !important;
	}
	/*.message-date-group{
		border-bottom: solid 2px #f68136 !important;
	}*/
}