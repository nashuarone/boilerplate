import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: IBuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            INJECTED_IS_DEV_MODE: JSON.stringify(isDev),
        }),
    ]
}